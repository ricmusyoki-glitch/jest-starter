const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
  it('should capitalize the first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('javascript is fun')).toBe('Javascript Is Fun');
  });
});

describe('filterActiveUsers', () => {
  it('should filter users who are active', () => {
    const users = [
      { name: 'Alice', isActive: true },
      { name: 'Bob', isActive: false },
      { name: 'Charlie', isActive: true }
    ];
    const activeUsers = filterActiveUsers(users);
    expect(activeUsers).toEqual([
      { name: 'Alice', isActive: true },
      { name: 'Charlie', isActive: true }
    ]);
  });
});

describe('logAction', () => {
  it('should log an action with username and timestamp', () => {
    const result = logAction('login', 'Alice');
    expect(result).toMatch(/^User Alice performed login at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
  });
});

