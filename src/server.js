import express from "express";

const PORT = 4000;
const app = express();

const handleListening = () => console.log(`Server started at ${PORT}`);

app.listen(PORT, handleListening);
