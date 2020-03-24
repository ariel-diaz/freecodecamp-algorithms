function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    const reverseKey = list => list.map(([quantity, title]) => [title, quantity]);

    const objArr1 = Object.fromEntries(reverseKey(arr1));

    arr2.forEach(([quantity, key]) => {
        if (objArr1[key]) {
            objArr1[key] = objArr1[key] + quantity;
        } else {
            objArr1[key] = quantity
        }
    });


    const result = reverseKey(Object.entries(objArr1).sort());
    const sortResult = result.sort(([, value],[, valueB]) =>        valueB - value )
    return sortResult;
}

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
