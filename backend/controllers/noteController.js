const Note = require("../models/Note");


//create Notes 

async function createNote(req, res) {
    try {
        const { title, category, content } = req.body;
        const userId = req.params.id;

        // Basic validation
        if (!title || !category || !content) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const note = await Note.create({
            userId,
            title,
            category,
            content
        });

        res.status(201).json({
            success: true,
            message: "Note created successfully",
            note: note
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


// get notes based on user id


async function getNotesByUserId(req, res) {

    try {

        const userId = req.user.id;

        // Query parameters
        const {
            search = "",
            category = "all",
            sort = "newest"
        } = req.query;


        // Base filter - only logged-in user's notes
        const filter = {
            userId: userId
        };


        // SEARCH
        if (search.trim() !== "") {

            filter.$or = [
                {
                    title: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    content: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ];

        }


        // FILTER BY CATEGORY
        if (category !== "all") {

            filter.category = category;

        }


        // SORT
        let sortOption = {};

        if (sort === "oldest") {

            sortOption = {
                createdAt: 1
            };

        } else if (sort === "title-asc") {

            sortOption = {
                title: 1
            };

        } else if (sort === "title-desc") {

            sortOption = {
                title: -1
            };

        } else {

            // Default = newest
            sortOption = {
                createdAt: -1
            };

        }


        // Get notes
        const notes = await Note.find(filter)
            .sort(sortOption)
            .populate("userId", "name email");


        return res.status(200).json({

            success: true,
            message: "Notes retrieved successfully",
            notes: notes

        });

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

}


// update notes

async function updateNote(req, res) {
    
        try {
            const noteId = req.params.noteId;
            const { title, category, content } = req.body;
    
            // Basic validation
            if (!title || !category || !content) {
                return res.status(400).json({
                    success: false,
                    message: "All fields are required"
                });
            }
    
            const note = await Note.findByIdAndUpdate(
                noteId,
                { title, category, content },
                { new: true }
            );
    
            if (!note) {
                return res.status(404).json({
                    success: false,
                    message: "Note not found"
                });
            }
    
            res.status(200).json({
                success: true,
                message: "Note updated successfully",
                note: note
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }




 //delete notes
 
 async function deleteNote(req, res) {
    
        try {
            const noteId = req.params.noteId;
    
            const note = await Note.findByIdAndDelete(noteId);
    
            if (!note) {
                return res.status(404).json({
                    success: false,
                    message: "Note not found"
                });
            }
    
            res.status(200).json({
                success: true,
                message: "Note deleted successfully"
            });
    
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }

    }


module.exports = {
    createNote,
    getNotesByUserId,
    updateNote,
    deleteNote

};
