'use strict';

const { execSync } = require('child_process');

const TARGET = `Hello`.replace(/\n/g, ' ').split(' ');

const WORD_LIST = TARGET.filter((x, i, self) => {
 return self.indexOf(x) === i;
});

for (let i = 0; i < WORD_LIST.length; i++) {
  process.stdout.write(`\r${i+1}/${WORD_LIST.length}`);
  execSync(`curl -X POST https://avatar.lyrebird.ai/api/v0/generate -H 'Authorization: Bearer `${process.env.AUTH_TOKEN}`' -H 'Cache-Control: no-cache' -H 'Content-Type: application/json' -d '{"text":"${encodeURIComponent(WORD_LIST[i])}"}' > ./wavs/${encodeURIComponent(WORD_LIST[i])}.wav`);
}
