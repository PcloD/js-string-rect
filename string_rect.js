/*
 *  Licensed under the MIT license.
 *  http://www.opensource.org/licenses/mit-license.php
 */

(function(global) {

    var retrieveStringRects = function(elem) {

        if(elem.nodeType == elem.TEXT_NODE) {
            var range = elem.ownerDocument.createRange();
            range.selectNodeContents(elem);

            var current_pos = 0;
            var end_pos = range.endOffset;

            var results = [];

            while(current_pos + 1 <= end_pos) {
                range.setStart(elem, current_pos);
                range.setEnd(elem, current_pos + 1);
                current_pos += 1;

                results.push({string: range.toString(), rect: range.getBoundingClientRect()});
            }

            range.detach();
            return results;
        } else {

            var results = [];
            for(var i = 0; i < elem.childNodes.length; i++) {
                results.push(retrieveStringRects(elem.childNodes[i]));
            }

            // flatten result
            return Array.prototype.concat.apply([], results);
        }
        return null;
    };

    /*
     * Extend Element.prototype iff ES5 is available
     */
    if(typeof (Object.defineProperty) === 'function') (function(obj, methods) {

        var f2m = function(f) {
            return function() {
                return f(this);
            };
        };

        for(var k in methods) if (!obj[k]) Object.defineProperty(
            obj, k, {
                value: f2m(methods[k]),
                enumerable: true,
                writable: true,
                configurable: true
            }
        );
    })(HTMLElement.prototype, {
        retrieveStringRects: retrieveStringRects
    });
})(this);

