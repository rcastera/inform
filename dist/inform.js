/**
 * Copyright (c) 2013 Richard Castera
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function($) {
    $.extend({
        config: null,
        widget: $('#inform-actions'),
        inform: function(message, options) {
            var that = this;
            var defaults = {
                message: message || 'Message',
                cssClass: 'inform-notice',
                width: '100%',
                timeout: 0,
                effect: 'fade'
            };

            this.config = $.extend({}, defaults, options);

            if (this.widget.length < 1) {
                var css = {
                    'padding': '10px',
                    'z-index': 99999,
                    'width': this.config.width,
                    'position': 'fixed',
                    'top': '0px',
                    'text-align': 'center'
                };
                this.widget = $('<div/>')
                                .attr('id', 'inform-actions')
                                .css(css)
                                .removeClass()
                                .addClass(this.config.cssClass)
                                .html(this.config.message)
                                .hide();

                if (this.config.effect == 'fade') {
                    this.widget.fadeIn();
                } else {
                    this.widget.slideDown();
                }

                $('body').prepend(this.widget);
                this.widget.click(function(event) {
                    that.hide();
                });
            } else {
                this.widget
                    .removeClass()
                    .addClass(this.config.cssClass)
                    .html(this.config.message)
                    .hide();

                if (this.config.effect == 'fade') {
                    this.widget.fadeIn();
                } else {
                    this.widget.slideDown();
                }
            }

            // If configured to hide at specified interval, do so.
            if (this.config.timeout > 0) {
                setTimeout(function() {
                    that.hide();
                }, this.config.timeout);
            }
        },

        hide: function() {
            if (this.config.effect == 'fade') {
                this.widget.fadeOut();
            } else {
                this.widget.slideUp();
            }
        }
    });
})(jQuery);
