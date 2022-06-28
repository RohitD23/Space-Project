const DEFAULT_PAGE_NO = 1;
const DEFAULT_LIMIT_NO = 0;

function getPagination(query) {
  const page = Math.abs(query.page) || DEFAULT_PAGE_NO;
  const limit = Math.abs(query.limit) || DEFAULT_LIMIT_NO;
  const skip = limit * (page - 1);

  return { skip, limit };
}

module.exports = { getPagination };
