import fs from 'fs/promises'

// Part 1: Read the contents of ./resources/1-hello-world.txt
export async function readHelloWorld() {
  // The path is provided for you:
  const path = new URL('./resources/1-hello-world.txt', import.meta.url);
  
  const text = await fs.readFile(path, 'utf-8');
  
  return text; 
}

// Part 2: Return the contents of ./resources/2-diary-entry.txt
export async function readDiaryEntry() {
  // TODO: Return the contents of the file as a utf-8 string
  const path = new URL('./resources/2-diary-entry.txt', import.meta.url);
  const txt = await fs.readFile(path, 'utf-8');
  return txt;
}

// Part 3: Overwrite ./resources/3-save-data.txt with saveDataString
export async function writeSaveData(saveData) {
  // The path is provided for you:
  const path = new URL('./resources/3-save-data.txt', import.meta.url)
                                                                      
  // The data is converted to a string for you:
  const saveDataString = JSON.stringify(saveData)
  await fs.writeFile(path, saveDataString);

  // TODO: Write the saveData string to the file
}

// Part 4: Append text to ./resources/4-log-file.txt
export async function appendLogEntry(logEntry) {

  const path = new URL('./resources/4-log-file.txt', import.meta.url)
  // The text to append is given:
  const textToAppend = logEntry + '\n';
  await fs.appendFile(path, textToAppend);

  // TODO: Append the text to the file
}
