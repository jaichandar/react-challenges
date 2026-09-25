self.onmessage = (event) => {
    const { inputValue } = event.data as any;
    let sum = 0;
    for (let i = 0; i < inputValue; i++) {
        sum += i;
    }
    self.postMessage(sum);
}