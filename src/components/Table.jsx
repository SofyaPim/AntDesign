import { Table, Typography, Image } from 'antd';
import { users } from "../Data"

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <Typography.Text copyable>{text}</Typography.Text>,
      
      },
      {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
      
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary',
        sorter: (a,b) => a.salary - b.salary,
      
      },
      {
        title: 'Post',
        dataIndex: 'post',
        key: 'post',
        filters:[
            {
                text:"co-boss",
                value: "co-boss",
            },
            {
                text:"dev",
                value: "dev",
            },
            {
                text:"dis",
                value: "dis",
            }

        ],
        onFilter: (value, item) => item.post.includes(value)
      
      },
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <Image src={image} alt="portrait" width={150}/>
      }

]




 const _Table = () => {
    return (
       
            <Table dataSource={users} columns={columns}/>
       
    )
}
 export default _Table