const path = require("path");
const fs = require("fs/promises");
const { fsync } = require("fs");

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join())
// console.log(path.resolve())
// console.log(path.join(__dirname))
//node js spell
//path.join(__dirname)
// console.log(usersPath)

const usersPath = path.join(__dirname, "..", "db", "users.json");

class FileOperations {
  constructor(path) {
    this.path = path;
  }

  read = async () => {
    const file = await fs.readFile(this.path, "utf-8");
    return JSON.parse(file);
  };

  display = async () => {
    const data = await this.read();
    console.table(data);
    return true;
  };
  remove = async () => {
    return await fs.unlink(this.path);
  };
  create = async (data) => {
    return await fs.writeFile(this.path, JSON.stringify(data, null, 2));
  };
  update = async (user) => {
    const data = await this.read();
    data.push(user);
    return await this.create(data);
  };
  updateOne = async (id, newName) => {
    const data = await this.read();
    const idx = data.findIndex((el) => el.id === id);
    if (idx === -1) {
      console.log(`id: ${id} is not valid`);
      return null;
    }
    data[idx].name = newName;
    return await this.create(data);
  };
  removeOne = async (id) => {
    const data = await this.read();
    const idx = data.findIndex((el) => el.id === id);
    if (idx === -1) {
      console.log(`id: ${id} is not valid`);
      return null;
    }
    data.splice(idx, 1);
    return await this.create(data);
  };
}
const file = new FileOperations(usersPath);

// file.read(); //Зчитує і розпаршує файл users.json
// file.display(); // Виводить в консоль зміст файла users.json
// file.remove(); // Повністю видаляє файл users.json

// const data = [
//   { id: "1", name: "ivan" },
//   { id: "2", name: "tetiana" },
//   { id: "3", name: "max" },
// ];

// file.create(data); //Створює з нуля users.json з даними

// file.update({ id: "4", name: "andriy" }); // Додає в кінець массиву ще один об'єкт користувача

// file.updateOne("2", "Tetiana Udod"); // Шукає користувача в массиві і оновлює йому ім'я

// file.removeOne("100"); // Шукає користувача в массиві і видаляє об'єкт цього користувача

// async function asyncHandler(clb, ...data) {
//   try {
//     if (data) {
//       await clb(...data);
//     } else {
//       await clb();
//     }
//   } catch (error) {
//     console.log(`ivan custom error ${error.message}`);
//   }
// }
async function asyncHandler(clb, ...data) {
  try {
    data ? await clb(...data) : await clb();
  } catch (error) {
    console.log(`ivan custom error ${error.message}`);
  }
}

// asyncHandler(file.display)
// asyncHandler(() => file.removeOne("4"));
// asyncHandler(file.removeOne, "3");
asyncHandler(file.updateOne, "1", "andriy pomirskyi");
