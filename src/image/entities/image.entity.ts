// import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
// import {Product} from "../../product/entities/product.entity";
// import {JoinTable} from "typeorm";
//
// @Entity()
// export class Image {
//     @PrimaryGeneratedColumn()
//     id: number
//
//     @Column()
//     productId: number
//
//     @ManyToOne(type => Product, (product) => product.images)
//     @JoinTable({
//         name: 'products',
//         joinColumn: {
//             name: 'id',
//             referencedColumnName: 'productId'
//         }
//     })
//     product: Product
//
//     @Column({
//         type: "varchar",
//         nullable: false
//     })
//     path: string
// }
