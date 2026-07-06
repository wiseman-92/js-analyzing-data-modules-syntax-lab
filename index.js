require ('datejs')
function combineUsers (...args) {
  const combinedObject = {
    users: []
  }
  args.forEach(item => combinedObject.users.push(...item))
  combinedObject.merge_date = Date.today().toString('M/d/yyyy')
  return combinedObject
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};