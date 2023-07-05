function printId(id) {
    if (typeof id === "string") {
        return console.log(id.toUpperCase());
    }
    return console.log(id);
}
