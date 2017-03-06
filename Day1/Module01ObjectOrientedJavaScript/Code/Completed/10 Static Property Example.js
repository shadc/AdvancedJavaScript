// Static Property Example
let _property = 0;
class StaticProperty {
    static get property() { return _property; }
    static set property(value) { _property = value; }
}
StaticProperty.property = 5;
console.log(StaticProperty.property);