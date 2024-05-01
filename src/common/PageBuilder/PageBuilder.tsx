import { SxProps } from "@mui/material";
import { PageHeaderText, PageHeaderWrapper, PageContainer } from "./PageBuilder.styles";

interface PageBuilderProps {
    id: string;
    variant?: 'container' | 'box';
    title?: string;
    children: React.ReactNode;
    sx?: SxProps;
}

const PageBuilder: React.FC<PageBuilderProps> = ({
    id,
    variant = 'container',
    title,
    children,
    sx,
}) => {
    return (
        <PageContainer
            id={id}
            sx={sx}
        >
            {title &&
                <PageHeaderWrapper pb={3}>
                    <PageHeaderText>{title}</PageHeaderText>
                </PageHeaderWrapper>
            }
            {children}
        </PageContainer>
    );
};

export default PageBuilder;