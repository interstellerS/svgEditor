import { Map } from 'extendable-immutable';

export default class SvgShape  extends Map {

    constructor( options ) {
        super ( options )
    }

    get name () {
        return this.get('name')
    }

    set name (value) {
        this.set( 'name', value )
    }

    get children () {
        return this.get('children')
    }

    get hasChildren () {
        return this.children.size > 0
    }

    get expanded () {
        return this.get('expanded')
    }

    setChildren (value) {
        return this.set( 'children', value )
    }

    addChild ( element ) {
        const newChildren = this.children.push(element)
        const other = this.setChildren( newChildren ) ;
        return other ;
    }

}
