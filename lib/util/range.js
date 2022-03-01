function* range(start, end) {
    while (start < end)
        yield start++;
}
exports.range = range;
