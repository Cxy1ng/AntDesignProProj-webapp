import { ProCard,ProFormGroup,ProFormSwitch } from '@ant-design/pro-components';
import React from "react";

export default () => {
  return (
    <>
      <ProCard
        direction="column"
        ghost
        gutter={{
          xs: 8,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
          xxl: 8,
        }}
        >
        <ProCard
          title="MW Minecraft Building Server"
          bordered
          extra={
            <ProFormGroup>
              <ProFormSwitch
                name="Enable"
                noStyle
                checkedChildren={'运行中'}
                unCheckedChildren={'已停止'}
              />
            </ProFormGroup>
          }
          tooltip=""
          style={{ marginBlockStart: 12 }}
        >
          <div>服务器版本：1.20.4</div>
          <div>创建时间： 2024-7-8 4:16:33 PM GMT +8:00</div>
          <div>占用空间：4.38GB</div>
        </ProCard>
        <ProCard
          direction="column"
          title="MW Minecraft Modding Server"
          bordered
          extra={
            <ProFormGroup>
              <ProFormSwitch
                name="Enable"
                noStyle
                checkedChildren={'运行中'}
                unCheckedChildren={'已停止'}
              />
            </ProFormGroup>
          }
          tooltip="这是提示"
          style={{ marginBlockStart: 12 }}
        >
          <div>服务器版本：1.20.1</div>
          <div>创建时间： 2024-7-8 4:16:33 PM GMT +8:00</div>
          <div>占用空间：11.4GB</div>
        </ProCard>
        <ProCard
          direction="column"
          title="MW Unturned DS"
          bordered
          extra={
            <ProFormGroup>
              <ProFormSwitch
                name="Enable"
                noStyle
                checkedChildren={'运行中'}
                unCheckedChildren={'已停止'}
              />
            </ProFormGroup>
          }
          tooltip="这是提示"
          style={{ marginBlockStart: 12 }}
        >
          <div>服务器版本：2021.3.29.19821</div>
          <div>创建时间： 2024-7-8 4:16:33 PM GMT +8:00</div>
          <div>占用空间：5.14GB</div>
        </ProCard>
      </ProCard>

    </>
  );
};
