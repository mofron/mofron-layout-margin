/**
 * @file mofron-layout-margin/index.js
 * @brief margin layout of mofron
 * @author simpart
 */

mofron.layout.Margin = class extends mofron.Layout {
    constructor (tp,val) {
        try {
            super();
            
            var _tp  = (undefined === tp)  ? null : tp;
            var _val = (undefined === val) ? null : val;
            
            if (null === _tp) {
                throw new Error('invalid paramter');
            } else if ('number' === (typeof _tp)) {
                _val = _tp;
                _tp  = '';
            }
            
            this.m_type  = null;
            this.m_value = null;
            
            this.type(_tp);
            this.value(_val);
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
            tgt.vdom().style(mg, this.value() + 'px');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (tp) {
        try {
            if (undefined === tp) {
                return this.m_type;
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
