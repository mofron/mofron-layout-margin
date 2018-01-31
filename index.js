/**
 * @file mofron-layout-margin/index.js
 * @brief margin layout of mofron
 * @author simpart
 */

mofron.layout.Margin = class extends mofron.Layout {
    constructor (tp,val) {
        try {
            super();
            this.name('Margin');
            
            if ('object' === typeof tp) {
                this.prmOpt(tp);
            } else {
                if ('number' === typeof tp) {
                    this.value(tp);
                } else if ('string' === typeof tp) {
                    this.type(tp);
                    this.value(val);
                } else {
                    throw new Error('invalid parameter');
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutConts (idx, tgt) {
        try {
            var mg = 'margin';
            if ('' !== this.type()) {
                mg += '-' + this.type();
            }
            var setmgn = {};
            setmgn[mg] = this.value() + 'px';
            tgt.vdom().style(setmgn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (tp) {
        try {
            if (undefined === tp) {
                return (undefined === this.m_type) ? '' : this.m_type;
            }
            if (null === tp) {
                this.m_type = '';
                return;
            }
            if ( ('string' != (typeof tp)) ||
                 ( (''       != tp) &&
                   ('top'    != tp) &&
                   ('right'  != tp) &&
                   ('bottom' != tp) &&
                   ('left'   != tp) ) ) {
                throw new Error('invalid parameter');
            }
            this.m_type = tp;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (val) {
        try {
            if (undefined === val) {
                return this.m_value;
            }
            if ((null === val) || ('number' !== (typeof val))) {
                throw new Error('invalid parameter');
            }
            this.m_value = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.layout.margin = {};
module.exports = mofron.layout.Margin;
