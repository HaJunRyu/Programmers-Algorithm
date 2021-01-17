function solution(participants, completion) {
  participants.sort();
  completion.sort();

  for (let i = 0; i < participants.length; i++) {
    if (participants[i] !== completion[i]) return participants[i];
  }
}

console.log(solution(['marina', 'nikola', 'vinko', 'vinko'], ['marina', 'nikola', 'vinko'])); // vinko
console.log(solution(['leo', 'kiki', 'eden'], ['leo', 'kiki'])); // eden
