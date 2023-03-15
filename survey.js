const readline = require('readline');

setTimeout(() => {
  
})
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)   ', (answer1) => {
  setTimeout(() => {
    const r2 = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    r2.question('What\'s an activity you like doing? :)   ', (answer2) => {
      setTimeout(() => {
        const r3 = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
      
        r3.question('What do you listen to while doing that? :)   ', (answer3) => {
          setTimeout(() => {
            const r4 = readline.createInterface({
              input: process.stdin,
              output: process.stdout
            });
          
            r4.question('Which meal is your favourite (eg: dinner, brunch, etc.) :)   ', (answer4) => {

              setTimeout(() => {
                const r5 = readline.createInterface({
                  input: process.stdin,
                  output: process.stdout
                });
              
                r5.question('What\'s your favourite thing to eat for that meal? :)   ', (answer5) => {

                  setTimeout(() => {
                    const r6 = readline.createInterface({
                      input: process.stdin,
                      output: process.stdout
                    });
                  
                    r6.question('Which sport is your absolute favourite? :)   ', (answer6) => {

                      setTimeout(() => {
                        const r7 = readline.createInterface({
                          input: process.stdin,
                          output: process.stdout
                        });
                      
                        r7.question('What is your superpower? In a few words, tell us what you are amazing at! :)   ', (answer7) => {
          //////////////////////////////////////////////////////////////////////
                          
          setTimeout(() => {


            let spinner = '|/-\|/-\|/-\|/-\|/-\|/';

            for (i=0; i<spinner.length; i++){
            
              let spin = spinner[i];
            
              if (i === 3){
                spin = "\\";
              };
            
              setTimeout(() => {
                process.stdout.write(`LightHouseGPT is generating a fany profile for ${answer1} ... \r${spin}   `);
              }, 300 * i);
            
            };

            setTimeout(() => {





              process.stdout.write('\x07');

              const sentence = `\nFancy profile: ${answer1} loves listening to ${answer3} while ${answer2}, ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.\n`;

for (let i = 0; i < sentence.length; i++) {

  setTimeout(() => {
    process.stdout.write(
      sentence[i]);
  }, 50 * i);

  if (i === sentence.length - 1) {

    setTimeout(() => {
      process.stdout.write(
        "\n");
    }, 50 * i);
  }
}




              // console.log(`\nFancy profile: ${answer1} loves listening to ${answer3} while ${answer2}, ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.\n`);
            }, 7000);

            //Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.
          
          });

          //////////////////////////////////////////////////////////////////////

          r7.close();
                        });
                      });

                      r6.close();
                    });
                  });

                  r5.close();
                });
              });

              r4.close();
            });
          });

          r3.close();
        });
       });

      r2.close();
    }); 
  });

  rl.close();
});












