const BASE_URL = "http://localhost:5000/api/notes";


// create notes

const createNote = async (userId,title,category,content) => {

    try {

        const response = await fetch(
            `${BASE_URL}/${userId}/create-notes`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({title,category,content})
            }
        );

        const data = await response.json();
        console.log("createNote API response:", data); // Log the response for debugging

        return data;

    } catch (error) {
        return { success: false, message: "Failed to create note" };
    }
}


// get notes by user id

const getNotesByUserId = async () => {

    try {

        const response = await fetch(
            `${BASE_URL}/get-my-all-notes`,
            {
                method: "GET",
                credentials: "include"
            }
        );

        const data = await response.json();
        console.log("getNotesByUserId API response:", data); // Log the response for debugging

        return data;

    } catch (error) {
        return { success: false, message: "Failed to fetch notes" };
    }
}


//delete note by id

const deleteNoteById = async (userId,noteId) => {

    try {   

        const response = await fetch(

            `${BASE_URL}/${userId}/delete-note/${noteId}`,
            {
                method: "DELETE",
                credentials: "include"
            }

        );

        const data = await response.json();

        console.log("deleteNoteById API response:", data); // Log the response for debugging

        return data;

    } catch (error) {

        return { success: false, message: "Failed to delete note" };
    }

}


// update note by id

const updateNoteById = async (userId,noteId,noteData) => {

    try {
            
            const response = await fetch(
    
                `${BASE_URL}/${userId}/update-note/${noteId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify(noteData)
                }
    
            );
    
            const data = await response.json();
    
            console.log("updateNoteById API response:", data); // Log the response for debugging
    
            return data;
    
        } catch (error) {
                
                return { success: false, message: "Failed to update note" };
            }

}

export { 

    createNote,
    getNotesByUserId,
    deleteNoteById,
    updateNoteById

};
