const validate = (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    next();
};

export default validate;