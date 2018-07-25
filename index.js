/**
 * @file mofron-layout-margin/index.js
 * @brief margin layout of mofron
 * @author simpart
 */

mofron.layout.Margin = class extends mofron.Layout {
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
            setmgn[mg] = ('number' !== typeof this.value()) ?  this.value() : this.value() + 'px';
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
            if ( ('string' !== typeof prm) ||
                 ( ('top'    !== prm) &&
                   ('right'  !== prm) &&
                   ('bottom' !== prm) &&
                   ('left'   !== prm) ) ) {
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
            if (('string' !== typeof prm) && ('number' !== typeof prm))  {
                throw new Error('invalid parameter');
            }
            this.m_value = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.Margin;
/* end of file */
