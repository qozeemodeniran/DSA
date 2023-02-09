const heapPermutation = (a, size) => {
    if (size === 1) {
        console.log(a);
        return;
    }

    for (let i = 0; i < size; i++) {
        heapPermutation(a, size - 1);
        if (size & 1) {
            [a[0], a[size - 1]] = [a[size - 1], a[0]];
        } else {
            [a[i], a[size - 1]] = [a[size - 1], a[i]];
        }
    }
};

const size = 5;
const a = Array.from({ length: size }, (_, i) => i + 1);
heapPermutation(a, size);
