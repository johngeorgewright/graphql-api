import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Author } from './Author'

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ManyToOne(() => Author, (author) => author.books)
  author!: Author

  @Column('varchar')
  authorId!: string

  @Column('varchar')
  title!: string
}
