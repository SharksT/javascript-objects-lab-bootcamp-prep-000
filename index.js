var recipes = {}

function updateObjectWithKeyAndValue(obj,key,value) {
    return Object.assign({},obj,{key:value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value) {
  obj.key = value
  return obj
}

function deleteFromObjectByKey(obj,key) {
  var obj1 = Object.assign({},obj)
  delete obj1.key

}
