export class UserResponseDTO {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly username: string,
    public readonly email: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}
