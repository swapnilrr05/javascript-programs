function stringHandsOn() {
    // Step 1: Print the string as it is on console
    console.log("--------------------Step 1---------------");
    
    let str = " Hey you are doing good, keep it up ";
    console.log("Original String: ", str);

    // Step 2: Calculate length of the String
    console.log("--------------------Step 2---------------");
    let originalLength = str.length;
    console.log("Length of original string: ", originalLength);

    // Step 3: Remove the leading and trailing extra spaces and log string on console with its length
    console.log("--------------------Step 3---------------");
    let trimmedStr = str.trim();
    let trimmedLength = trimmedStr.length;
    console.log("Trimmed String: '", trimmedStr, "'");
    console.log("Length of trimmed string: ", trimmedLength);

    // Step 4: Print the total number of extra spaces count that is removed in step 3
    console.log("--------------------Step 4---------------");
    let extraSpacesCount = originalLength - trimmedLength;
    console.log("Total number of extra spaces removed: ", extraSpacesCount);

    // Step 5: Print the first and last character on the same line after trim()
    console.log("--------------------Step 5---------------");
    let firstChar = trimmedStr.charAt(0);
    let lastChar = trimmedStr.charAt(trimmedStr.length - 1);
    console.log("First and last character after trim: ", firstChar, lastChar);

    // Step 6: Print the count of total words available in the string after trim
    console.log("--------------------Step 6---------------");
    let words = trimmedStr.split(' ');
    console.log("Total number of words in trimmed string: ", words.length);

    // Step 7: Print the index of the word "good" from the given string
    console.log("--------------------Step 7---------------");
    let indexOfGood = trimmedStr.indexOf("good");
    console.log("Index of word 'good': ", indexOfGood);

    // Step 8: Print the substring starting from index 22, using substring()
    console.log("--------------------Step 8---------------");
    let substringFromIndex22 = trimmedStr.substring(22);
    console.log("Substring starting from index 22: ", substringFromIndex22);

    // Step 9: Check if the string ends with the word "up" after step 3
    console.log("--------------------Step 9---------------");
    let endsWithUp = trimmedStr.endsWith("up");
    console.log("Does the string end with 'up'? ", endsWithUp);

    // Step 10: Check if the string starts with the word "Hey" after trimming
    console.log("--------------------Step 10---------------");
    let startsWithHey = trimmedStr.startsWith("Hey");
    console.log("Does the string start with 'Hey'? ", startsWithHey);
}

// Invoke the function
stringHandsOn();
