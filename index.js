/**
 * @file mofron-layout-margin/index.js
 * @brief margin layout of mofron
 * @author simpart
 */
const mf = require('mofron');

mf.layout.Margin = class extends mf.Layout {
    constructor (po, p2) {
        try {
            super();
            this.name('Margin');
            this.prmMap('type', 'value');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            let mg     = (null === this.type()) ? 'margin' : 'margin' + '-' + this.type();
            let setmgn = {};
            setmgn[mg] = this.value().toString();
            tgt.adom().style(setmgn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (prm) {
        try {
            if (undefined === prm) {
                 /* getter */
                 return (undefined === this.m_type) ? null : this.m_type;
            }
            /* setter */
            if ( ('top'    !== prm) &&
                 ('right'  !== prm) &&
                 ('bottom' !== prm) &&
                 ('left'   !== prm) ) {
                throw new Error('invalid parameter');
            }
            this.m_type = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (prm) {
        try {
            if (undefined === prm) {
                 /* getter */
                 return (undefined === this.m_value) ? null : this.m_value;
            }
            /* setter */
            this.m_value = mf.func.getSizeObj(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.layout.Margin;
/* end of file */
