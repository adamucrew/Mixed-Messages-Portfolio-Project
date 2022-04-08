function newMessage () {
    var beginning = ['I like ', 'I make ',];
    var begpicker = beginning[Math.floor(Math.random() * beginning.length)];
    var middle = ['bread ', 'sandwiches ', 'tea '];
    var midpicker = middle[Math.floor(Math.random() * middle.length)];
    var end = ['in the morning', 'in the afternoon', 'in the evening'];
    var endpicker = end[Math.floor(Math.random() * end.length)];
        
                    console.log(begpicker + midpicker + endpicker)
            }

newMessage();

