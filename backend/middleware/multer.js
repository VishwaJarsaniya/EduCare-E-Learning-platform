const multer = require('multer')

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: async (req,file,cb) => {
        cb(null,Date.now() + '-' + file.originalname)
    }
})

const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'application/pdf' || file.mimetype === 'image/png') {
        cb(null,true)
    }
    else {
        cb({
            message:'unsuppported format'
        })
    }
}

const upload = multer({
    storage:storage,
    limits: { 
        fileSize: 7 * 1024 * 1024
    },
    fileFilter:fileFilter
})



module.exports = { upload }