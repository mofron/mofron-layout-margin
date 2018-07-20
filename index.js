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
            this.prmOpt(po, p2);
            
            this.getParam().check(
                (tp) => {
                    try {
                        if (undefined === tp) {
                            return '';
                        }
                        if ( ('string' != (typeof tp)) ||
                             ( (''       != tp) &&
                               ('top'    != tp) &&
                               ('right'  != tp) &&
                               ('bottom' != tp) &&
                               ('left'   != tp) ) ) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                (val) => {
                    try {
                        if ( ('number' !== typeof val) && ('string' !== typeof val) ) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            let mg   = 'margin';
            let type = this.value()[0];
            let val  = this.value()[1];
            
            if ('' !== type) {
                mg += '-' + type;
            }
            let setmgn = {};
            setmgn[mg] = ('number' !== typeof val) ?  val : val + 'px';
            tgt.adom().style(setmgn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.Margin;
/* end of file */
