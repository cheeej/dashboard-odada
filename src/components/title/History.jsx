import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const History = () => {
    return (
        <Breadcrumb color="secondary_grey_700" fontSize="14px" fontWeight="500">
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={Link} to="/tables">
                    tables
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};

export default History;