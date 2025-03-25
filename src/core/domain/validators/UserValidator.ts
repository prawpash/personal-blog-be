export default class UserValidtor {
  static validate(
    id: number | null,
    name: string,
    username: string,
    email: string,
    password: string,
    profilePictureId: number | null,
    postIds: number[],
  ) {
    if (id && typeof id !== 'number') {
      throw new Error('id must be a number');
    }

    if (!name || name.trim() === '') {
      throw new Error('name is required');
    }

    if (!username || username === '') {
      throw new Error('username is required');
    }

    if (!email || email.trim() === '') {
      throw new Error('email is required');
    }

    if (!password || password.trim() === '') {
      throw new Error('password is required');
    }

    if (profilePictureId && typeof profilePictureId !== 'number') {
      throw new Error('profilePictureId must be a number');
    }

    if (postIds.length > 0 && postIds.some((id) => typeof id !== 'number')) {
      throw new Error('postIds must be a number');
    }
  }
}
