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
            const userId = req.user.id; //  get from req.user.id [req.user which filled up in middleware], if needed
            const notes = await Note.find({userId}).populate('userId', 'name email'); // populate user details if needed

            res.status(200).json({
                success: true,
                message: "Notes retrieved successfully",
                notes: notes
            });

        } catch (error) {
            res.status(500).json({
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
