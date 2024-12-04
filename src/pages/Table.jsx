import React from 'react'

const Table = () => {
    return (
        <div>
            <table>
                <thead>
                
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>29</td>
                        <td>Engineering</td>
                        <td>USA</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>34</td>
                        <td>Marketing</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Samuel Green</td>
                        <td>41</td>
                        <td>Finance</td>
                        <td>Australia</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Lisa Brown</td>
                        <td>27</td>
                        <td>Human Resources</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Michael Lee</td>
                        <td>37</td>
                        <td>Operations</td>
                        <td>Singapore</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table