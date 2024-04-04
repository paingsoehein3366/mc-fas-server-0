module.exports = ({ departmentService }) => {
      return Object.freeze({
            createDepartment: async (req, res, next) => {
                  const department = await departmentService.createDepartment(req.body);
            }
      })
}