import data from "./data.json" assert { type: "json" };
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log("Name is ", element.name);
    console.log("ID is ", element.id);
}
