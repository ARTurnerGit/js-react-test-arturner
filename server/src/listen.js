const app = require("./server");
const PORT = process.env.PORT || 8080;

// Start Express listening
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
