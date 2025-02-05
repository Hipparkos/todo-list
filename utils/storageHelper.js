import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadTasks = async (setTasks) => {
  try {
    const tasks = await AsyncStorage.getItem('tasks');
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
  } catch (error) {
    console.error('Failed to load tasks:', error);
  }
};

export const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks:', error);
  }
};
