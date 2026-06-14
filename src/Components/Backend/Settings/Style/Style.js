  import { useState } from "react";
  import { __ } from "@wordpress/i18n";
  import {
    PanelBody,
    PanelRow,
    RangeControl,
    SelectControl,
    __experimentalUnitControl as  UnitControl
  } from "@wordpress/components";
  import { Background, BButtonGroup, BoxControl, ColorControl, ColorsControl, Device, Label, ShadowControl, Typography } from "../../../../../../bpl-tools/Components";
  import { updateData } from "../../../../utils/functions";

  const Style = ({ attributes, setAttributes ,device}) => {
    const { styles={} } = attributes;



    return (
      <>
          <PanelBody
          
            className="bPlPanelBody"
            title={__("Container", "team-section")}
            initialOpen={false}
          >
            <Background label={__("Background", "team-section")} value={styles?.bg} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"bg")})}  />

              <PanelRow><Label>Padding</Label><Device/></PanelRow>
            
            <BoxControl  values={styles?.padding[device]} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"padding",device)})}/>

                <PanelRow><Label>Margin</Label><Device/></PanelRow>
            
            <BoxControl  values={styles?.margin[device]} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"margin",device)})}/>
            
            <BoxControl  className='mt15' label="Radius"  values={styles?.radius} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"radius")})}/>

              <BButtonGroup className="mt15" label="Alignment" options={[
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
  ]} value={styles?.align} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"align")})} />

          </PanelBody>

          <PanelBody className="bPlPanelBody"
            title={__("Team Profile", "team-section")}
            initialOpen={false}>

              <Background label={__("Background", "team-section")} value={styles?.teamProfile?.bg} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","bg")})} />

                <UnitControl className="mt15" label="Width" value={styles?.teamProfile?.width} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","width")})} />

                  <UnitControl className="mt15" label="Height" value={styles?.teamProfile?.height} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","height")})} />
          <UnitControl className="mt15" label="Hover Height" value={styles?.teamProfile?.hoverHeight} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","hoverHeight")})} />

                    <BoxControl className="mt15" label="Padding" values={styles?.teamProfile?.padding} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","padding")})} />

                            <BoxControl className="mt15" label="Radius" values={styles?.teamProfile?.radius} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","radius")})} />

                              <BoxControl className="mt15" label="Hover Radius" values={styles?.teamProfile?.hoverRadius} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","hoverRadius")})} />
                                <ShadowControl label="Shadow" value={styles?.teamProfile?.shadow} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","shadow")})} />




          </PanelBody>

          <PanelBody className="bPlPanelBody"
            title={__("Image", "team-section")}
            initialOpen={false}>

                <UnitControl className="mt15" label="Width" value={styles?.teamProfile?.image?.width} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","width")})} />

                  <UnitControl className="mt15" label="Height" value={styles?.teamProfile?.image?.height} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","height")})} />

                    
                    <BoxControl className="mt15" label="Radius" values={styles?.teamProfile?.image?.radius} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","radius")})} />
                      <BoxControl className="mt15" label="Hover Radius" values={styles?.teamProfile?.image?.hoverRadius} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","hoverRadius")})} />
                    <ShadowControl className='mt15' label="Shadow" value={styles?.teamProfile?.image?.shadow} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","shadow")})} />

                      <SelectControl className="mt15" options={[
                        {label:"Fill",value:"fill"},
                        {label:"Contain",value:"contain"},
                        {label:"Cover",value:"cover"},
                        {label:"Scale Down",value:"scale-down"},
                        {label:"None",value:"none"},
                      ]} label="Image Fit" value={styles?.teamProfile?.image?.imageFit} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","imageFit")})} />
                      <RangeControl min={-200} max={200} className="mt15" label="Translate Y (Hover)" value={styles?.teamProfile?.image?.translateY} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","translateY")})} />


          </PanelBody>


          <PanelBody className="bPlPanelBody"
            title={__("Name", "team-section")}
            initialOpen={false}>
            <ColorControl label="Color" value={styles?.teamProfile?.name?.color} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","name","color")})} />
            <Typography className="mt15" label="Typography" value={styles?.teamProfile?.name?.typo} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","name","typo")})} />

          </PanelBody>

            <PanelBody className="bPlPanelBody"
            title={__("Designation", "team-section")}
            initialOpen={false}>
            <ColorControl label="Color" value={styles?.teamProfile?.designation?.color} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","designation","color")})} />
            <Typography className="mt15" label="Typography" value={styles?.teamProfile?.designation?.typo} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","designation","typo")})} />

          </PanelBody>

          <PanelBody className="bPlPanelBody"
            title={__("Icon", "team-section")}
            initialOpen={false}>
              <ColorControl className='mt15' label="Color" value={styles?.teamProfile?.icon?.color} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","icon","color")})} />
              <ColorControl className='mt15' label="Hover Color" value={styles?.teamProfile?.icon?.hoverColor} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","icon","hoverColor")})} />
              <RangeControl min={0} max={100} className="mt15" label="Size" value={styles?.teamProfile?.icon?.size} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","icon","size")})} />
              <RangeControl min={0} max={100} className="mt15" label="Gap" value={styles?.teamProfile?.icon?.gap} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","icon","gap")})} />


          </PanelBody>
          
      </>
    );
  };

  export default Style;
