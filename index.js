/**
 * @file mofron-layout-margin/index.js
 * @brief margin layout of mofron
 *        target child component is got margin style.
 * @license MIT
 */
const cmputl = mofron.util.component;

module.exports = class extends mofron.class.Layout {
    /**
     * initialize margin layout
     *
     * @param (mixed) ConfArg: type,value parameter
     *                key-value: layout config
     * @short type,value
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name('Margin');
            this.shortForm('type', 'value');

            /* init config */
            this.confmng().add('type', { type: 'string', select: ['top', 'right', 'bottom', 'left'] });
            this.confmng().add('value', { type: 'size', init: '0.25rem' });
            
	    /* set config */
	    if (undefined !== prm) {
                this.config(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * margin layout
     *
     * @type private
     */
    contents (idx, tgt) {
        try {
            let mg     = (null === this.type()) ? 'margin' : 'margin' + '-' + this.type();
            let setmgn = {};
            setmgn[mg] = this.value();
	    cmputl.rstyle(tgt, setmgn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * margin type setter/getter
     *
     * @param (string) margin type ('top', 'right', 'bottom', 'left')
     *                 undefined: call as getter
     * @return (string) margin type
     * @attention it's enable for all directions of margin if the type is null.
     * @type parameter
     */
    type (prm) {
        try {
            return this.confmng('type', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * margin size value setter/getter
     *
     * @param (string(size)) margin size
     *                 undefined: call as getter
     * @return (string(size)) margin size
     * @type parameter
     */
    value (prm) {
        try {
            return this.confmng('value', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
