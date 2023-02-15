const taskKey = datastore.key('Task');
const task = {
  category: 'Personal',
  done: false,
  priority: 4,
  description: 'Learn Cloud Datastore',
};

const entity = {
  key: taskKey,
  data: task,
};

await datastore.update(entity);
// Task updated successfully.