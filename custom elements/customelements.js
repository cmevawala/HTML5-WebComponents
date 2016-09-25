var PluralSightCommentProto = Object.create(HTMLElement.prototype);

PluralSightCommentProto.createdCallback = function () {
    this.innerHTML = "<h2>Pluralsight Comment</h2><textarea></textarea></br><input type='submit'/>";
};

var PluralSightComment = document.registerElement('pluralsight-comment', {
    prototype: PluralSightCommentProto
});
