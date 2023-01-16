// 2. Odd Numbers

for (let int = 1; int <= 99; int++) {
  if (int % 2 === 1) {
    console.log(int);
  }
}

// Further Exploration

function displayOddNums (startInt, limitInt) {
  let int = startInt;

  while (true) {
    if (int > limitInt) break;

    if (int % 2 === 1) {
      console.log(int);
    }

    int += 1;
  }
}

displayOddNums(-3, 78);