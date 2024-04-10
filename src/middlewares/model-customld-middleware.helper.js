module.exports = function createCustomIdMiddleware({
      modleName,
      prefix,
      fieldName,
}) {
      return async function () {
            if (!this.isNew) return;

            const [lastDoc] = await this.$model(modleName)
                  .find()
                  .sort({ _id: -1 })
                  .limit(1);
            
            if (!lastDoc) {
                  this[fieldName] = `${prefix}-001`;
                  return;
            }
            const lastDocIdNumber = parseInt(lastDoc[fieldName].split('-')[1], 10);

            this[fieldName] = `${prefix}-${(lastDocIdNumber + 1)
                  .toString()
                  .padStart(3, "0")}`;
            return;
      };
};