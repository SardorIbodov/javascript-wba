Array.prototype.removeDuplicates = function() {
	return this.filter((v, i) => this.indexOf(v) === i);
}
