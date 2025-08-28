const SIZE = 10; 
let arr = new Array(SIZE).fill(null);
const arrayContainer = document.getElementById("arrayContainer");
const feedback = document.getElementById("feedback");

// Initial render
renderArray();

function renderArray(highlights = []) {
  arrayContainer.innerHTML = "";
  arr.forEach((val, idx) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    if (val !== null) cell.classList.add("filled");
    if (highlights.includes(idx)) cell.classList.add("highlight");
    cell.textContent = val !== null ? val : "";
    arrayContainer.appendChild(cell);
  });
}

function insertAt() {
  const index = parseInt(document.getElementById("indexInput").value);
  const value = parseInt(document.getElementById("valueInput").value);

  if (isNaN(index) || isNaN(value) || index < 0 || index >= SIZE) {
    setFeedback("⚠️ Invalid index or value!");
    return;
  }

  // Shift right
  for (let i = SIZE - 1; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value;

  setFeedback(`✅ Inserted ${value} at index ${index}`);
  renderArray([index]);
}

function deleteAt() {
  const index = parseInt(document.getElementById("indexInput").value);

  if (isNaN(index) || index < 0 || index >= SIZE) {
    setFeedback("⚠️ Invalid index!");
    return;
  }

  // Shift left
  for (let i = index; i < SIZE - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[SIZE - 1] = null;

  setFeedback(`🗑 Deleted element at index ${index}`);
  renderArray([index]);
}

function searchPattern() {
  const patternStr = document.getElementById("patternInput").value.trim();
  if (!patternStr) {
    setFeedback("⚠️ Enter a valid pattern!");
    return;
  }

  const pattern = patternStr.split(",").map(num => parseInt(num));
  let foundAt = -1;

  for (let i = 0; i <= SIZE - pattern.length; i++) {
    let match = true;
    for (let j = 0; j < pattern.length; j++) {
      if (arr[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      foundAt = i;
      break;
    }
  }

  if (foundAt !== -1) {
    setFeedback(`🎉 Pattern ${patternStr} found at index ${foundAt}`);
    renderArray([...Array(pattern.length).keys()].map(j => foundAt + j));
  } else {
    setFeedback("❌ Pattern not found!");
    renderArray();
  }
}

function resetArray() {
  arr = new Array(SIZE).fill(null);
  renderArray();
  setFeedback("🔄 Array reset!");
}

function setFeedback(msg) {
  feedback.textContent = msg;
}