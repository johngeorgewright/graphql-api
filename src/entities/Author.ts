import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Book } from './Book'

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @OneToMany(() => Book, (book) => book.author)
  books!: Book[]

  @Column('varchar')
  name!: string

  @Column('varchar')
  email!: string
}
