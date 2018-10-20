/**
 * @file mofron-layout-margin/index.js
 * @brief margin layout of mofron
 * @author simpart
 */
const mf = require('mofron');

mf.layout.Margin = class extends mf.Layout {
    /**
     * initialize margin layout
     *
     * @param p1 (object) layout option
     * @param p1 (string) margin type
     * @param p2 (string) margin size value
     */
    constructor (po, p2) {
        try {
            super();
            this.name('Margin');
            this.prmMap(['type', 'value']);
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * margin layout
     *
     * @note private method
     */
    contents (idx, tgt) {
        try {
            let mg     = (null === this.type()) ? 'margin' : 'margin' + '-' + this.type();
            let setmgn = {};
            setmgn[mg] = this.value();
            tgt.adom().style(setmgn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter margin type
     *
     * @param p1 (string) margin type ('top', 'right', 'bottom', 'left')
     * @param p1 (undefined) call as getter
     * @return (string) margin type
     */
    type (prm) {
        try {
            return this.member(
                'type',
                ['top', 'right', 'bottom', 'left'],
                prm
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter margin size value
     *
     * @param (string) margin size (css value)
     * @param (undefined) call as getter
     * @return (string) margin size (css value)
     */
    value (prm) {
        try {
            return this.member(
                'value',
                'string',
                (undefined !== prm) ? mf.func.getSize(prm).toString() : prm,
                '0.25rem'
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.layout.Margin;
/* end of file */
